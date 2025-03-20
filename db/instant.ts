import { i, init } from '@instantdb/react'

const APP_ID = process.env.NEXT_PUBLIC_INSTANTDB_APP_ID

if (!APP_ID) {
  throw new Error('Missing NEXT_PUBLIC_INSTANTDB_APP_ID in your .env file')
}

// Optional: Declare your schema
export const schema = i.schema({
  entities: {
    todos: i.entity({
      text: i.string(),
      done: i.boolean(),
      createdAt: i.number(),
    }),
  },
})

export const db = init({ appId: APP_ID, schema })
