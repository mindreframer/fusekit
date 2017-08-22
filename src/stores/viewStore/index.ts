import { observable, computed, action } from "mobx"

export default class ViewStore {
  @observable page = "books"
  @observable selectedBookId:string|null = null
  shop:any

  constructor(shop:any) {
    this.shop = shop
  }

  @computed get isLoading() {
    return this.shop.isLoading
  }

  @computed get currentUrl() {
    switch (this.page) {
      case "books":
        return "/"
      case "book":
        return "/book/" + this.selectedBookId
      case "cart":
        return "/cart"
      default:
        return "/404"
    }
  }

  @computed get selectedBook() {
    return this.isLoading || !this.selectedBookId ? null : this.shop.books.get(this.selectedBookId)
  }

  @action.bound openBooksPage() {
    this.page = "books"
    this.selectedBookId = null
  }

  @action.bound openBookPage(book:any) {
    this.page = "book"
    this.selectedBookId = book.id
  }

  @action.bound openBookPageById(id:string) {
    this.page = "book"
    this.selectedBookId = id
  }

  @action.bound openCartPage() {
    this.page = "cart"
    this.selectedBookId = null
  }
}