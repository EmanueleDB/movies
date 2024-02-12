export type TTvShow = {
  genres: Array<string>
  name: string
  id: number
  image: {
    medium: string
  }
  language: string
  network: {
    name: string
  }
  summary: string
  rating: {
    average: number
  }
}

export type TGroup = {
  genre: string
  tvShows: Array<TTvShow>
}
