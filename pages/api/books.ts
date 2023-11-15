import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { id: number; title: string }[]

const bookDB = [
  { id: 1, title: 'name 1' },
  { id: 2, title: 'title 1' },
  { id: 3, title: 'name 2' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    let books = bookDB
    // query params term in url
    const term = String(req.query.term)

    if (term) {
      books = books.filter(book => book.title.toLowerCase().includes(term))
    }

    res.status(200).json(books)
  }
}
