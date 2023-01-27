export type Styles = {
  description: string
  item: string
  link: string
  list: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
