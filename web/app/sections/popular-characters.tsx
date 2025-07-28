import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CharacterPagination } from '@/types/api-the-simpsons/character'
import { baseUrl } from '@/services/api'

export function PopularCharacters({ characters }: { characters: CharacterPagination }) {
  return (
    <section id='example' className='py-16 '>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Popular Characters</h2>
          <p className='text-gray-600'>Meet some of the most iconic characters from Springfield</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
          {characters.results.map(({ id, name, portrait_path, age, status, phrases, occupation }) => (
            <Card
              key={id}
              className='text-center transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-yellow-200 hover:border-yellow-400 hover:bg-yellow-50'
            >
              <Link
                href={`${baseUrl}/characters/${id}`}
                target='_blank'
                data-umami-event='Popular Characters character'
                data-umami-event-name={name}
                prefetch={false}
              >
                <CardHeader className='pb-2'>
                  <div className='mx-auto mb-4 relative'>
                    <div className='w-32 h-32 mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-yellow-300 group-hover:scale-110 group-hover:rotate-2'>
                      <Image
                        src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`}
                        alt={name}
                        width={128}
                        height={128}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                  <CardTitle className='text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap transition-colors duration-300 group-hover:text-yellow-700'>
                    {name}
                  </CardTitle>
                  <CardDescription className='text-sm text-gray-600 min-h-[2.5rem] flex items-center justify-center line-clamp-2 transition-colors duration-300 group-hover:text-yellow-600'>
                    {occupation}
                  </CardDescription>
                </CardHeader>
                <CardContent className='pt-0 space-y-2'>
                  <div className='flex justify-center gap-2'>
                    {!!age && (
                      <Badge variant='outline' className='text-xs'>
                        Age: {age}
                      </Badge>
                    )}
                    {status === 'Alive' ? (
                      <Badge variant='outline' className='text-xs bg-green-50 text-green-700'>
                        {status}
                      </Badge>
                    ) : (
                      <Badge variant='outline' className='text-xs bg-red-50 text-red-700'>
                        {status}
                      </Badge>
                    )}
                  </div>
                  {phrases.length > 0 && (
                    <div className='text-xs text-gray-500 italic transition-all duration-300 group-hover:text-yellow-600 group-hover:font-medium'>
                      "{phrases.find((phrase) => phrase.length < 50)}"
                    </div>
                  )}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
