export const BLOB_URL = 'https://yxcr65xsmnbnpdvj.public.blob.vercel-storage.com'

export const CONTACT_LINKS = {
  linkedIn: 'https://www.linkedin.com/in/nicholas-beuchat/',
  email: 'mailto:hi@nickbeuchat.com',
  resume: '/documents/resume.pdf'
}

export const PROJECTS: Array<PROJECT_TYPE> = [
  {
    title: 'r.chiara',
    description: "Reimagining a jeweler's online presence",
    link: '/projects/rchiara',
    roles: ['Design', 'Development'],
    // thumbnailMedia: {
    //   videos: [
    //     {
    //       src: `${BLOB_URL}/rchiara-thumb.webm`,
    //       type: 'video/webm'
    //     }
    //   ]
    // }
  },
  {
    title: 'The McNabb Center',
    description: "A digital revamp for a local nonprofit mainstay",
    link: '/projects/mcnabb-center',
    roles: ['Design', 'Development'],
    // thumbnailMedia: {
    //   videos: [
    //     {
    //       src: `${BLOB_URL}/mcnabb-thumb.webm`,
    //       type: 'video/webm'
    //     }
    //   ]
    // }
  },
  {
    title: 'Shake Shack',
    description: "Merchandise storefront for a global culinary phenomenon",
    roles: ['Design', 'Development'],
    thumbnailMedia: {
      images: [
        {
          src: '/images/thumb-ss-test.webp',
          alt: 'alt'
        },
        {
          src: '/images/media-placeholder.svg',
          alt: 'alt'
        }
      ]
    }
  },
  {
    title: 'The Sims',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    roles: ['Design', 'Development'],
  },
  {
    title: 'Dr. Noze Best',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    roles: ['Design', 'Development'],
  },
  {
    title: 'BoomCo',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    roles: ['Design'],
  },
  {
    title: 'SOFI TUKKER',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    roles: ['Design', 'Development'],
  },
  {
    title: 'Chroma Energy Group',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    roles: ['Design'],
  },
  {
    title: 'Ambition',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    roles: ['Design'],
  },
  {
    title: 'Orange Hat Brewing Co.',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    roles: ['Graphic Design'],
  },
]

// TYPES

export type PROJECT_TYPE = {
  title: string,
  description: string,
  link?: string,
  roles: Array<'Design' | 'Development' | 'Graphic Design'>,
  thumbnailMedia?: {
    videos?: Array<{
      src: string,
      type: string
    }>,
    images?: Array<{
      src: string,
      alt: string
    }>
  }
}