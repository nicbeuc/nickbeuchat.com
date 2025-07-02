export const BLOB_URL = 'https://yxcr65xsmnbnpdvj.public.blob.vercel-storage.com'

export const CONTACT_LINKS = {
  linkedIn: 'https://www.linkedin.com/in/nicholas-beuchat/',
  email: 'mailto:hi@nickbeuchat.com',
  resume: '/documents/resume.pdf'
}

export const PROJECTS = [
  {
    title: 'r.chiara',
    description: "Reimagining a jeweler's online presence",
    link: '/projects/rchiara',
    roles: ['Design', 'Development'],
    thumbnailMedia: {
      videos: [
        {
          src: `${BLOB_URL}/rchiara-thumb.webm`,
          type: 'video/webm'
        }
      ]
    }
  }
]

// TYPES

export type PROJECT_TYPE = {
  title: string,
  description: string,
  link?: string,
  roles: Array<string>,
  thumbnailMedia: {
    videos?: Array<{
      src: string,
      type: string
    }>,
    images?: Array<string>
  }
}