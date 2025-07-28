'use client'

import { Copy, ExternalLink, Check } from 'lucide-react'
import { useCopyToClipboard } from '@uidotdev/usehooks'

import { Button } from '@/app/components/ui/button'
import { openInNewTab } from '@/utils/open-in-new-tab'

interface ExampleUrlDisplayProps {
  url: string
  description: string
}

export function ExampleUrlDisplay({ url, description }: ExampleUrlDisplayProps) {
  const [copiedText, copyToClipboard] = useCopyToClipboard()

  return (
    <div>
      <p className='text-sm text-gray-600 mb-1'>{description}:</p>
      <div className='bg-gray-50 p-3 rounded text-sm'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
          <code className='flex-1 min-w-0 overflow-x-auto text-xs sm:text-sm'>{url}</code>
          <div className='flex gap-1 flex-shrink-0 self-end sm:self-auto'>
            <Button
              size='sm'
              variant='ghost'
              onClick={() => copyToClipboard(url)}
              className='h-6 w-6 p-0 text-gray-500 hover:text-gray-700'
              title='Copy URL'
            >
              {copiedText ? <Check className='h-3 w-3' /> : <Copy className='h-3 w-3' />}
            </Button>
            <Button
              size='sm'
              variant='ghost'
              onClick={() => openInNewTab(url)}
              className='h-6 w-6 p-0 text-gray-500 hover:text-gray-700'
              title='Open in new tab'
            >
              <ExternalLink className='h-3 w-3' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
