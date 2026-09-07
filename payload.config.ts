import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      slug: 'articles',
      labels: {
        singular: 'Статья',
        plural: 'Статьи',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Заголовок',
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          label: 'URL (slug)',
          admin: {
            description: 'Например: ruchnaya-rubka-vs-ocilindrovka',
          },
        },
        {
          name: 'excerpt',
          type: 'textarea',
          label: 'Краткое описание',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Текст статьи',
          editor: lexicalEditor({}),
        },
        {
          name: 'publishedAt',
          type: 'date',
          label: 'Дата публикации',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'tags',
          type: 'array',
          label: 'Теги',
          fields: [
            {
              name: 'tag',
              type: 'text',
            },
          ],
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Черновик', value: 'draft' },
            { label: 'Опубликовано', value: 'published' },
          ],
          defaultValue: 'draft',
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'severnyj-les-secret-key-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || `file:${path.resolve(dirname, '../payload.db')}`,
    },
  }),
})
