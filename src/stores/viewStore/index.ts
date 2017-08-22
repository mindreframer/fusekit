import { observable, computed, action } from "mobx"
import RootStore from '../RootStore'


export default class ViewStore {
  rootStore:RootStore

  @observable page = "books"
  @observable selectedBookId:string|null = null

  constructor(rootStore:any) {
    this.rootStore = rootStore
  }

  // @computed get isLoading() {
  //   return this.shop.isLoading
  // }

  // @computed get currentUrl() {
  //   switch (this.page) {
  //     case "books":
  //       return "/"
  //     case "book":
  //       return "/book/" + this.selectedBookId
  //     case "cart":
  //       return "/cart"
  //     default:
  //       return "/404"
  //   }
  // }

  // @computed get selectedBook() {
  //   return this.isLoading || !this.selectedBookId ? null : this.shop.books.get(this.selectedBookId)
  // }

  // @action.bound openBooksPage() {
  //   this.page = "books"
  //   this.selectedBookId = null
  // }

  // @action.bound openBookPage(book:any) {
  //   this.page = "book"
  //   this.selectedBookId = book.id
  // }

  // @action.bound openBookPageById(id:string) {
  //   this.page = "book"
  //   this.selectedBookId = id
  // }

  // @action.bound openCartPage() {
  //   this.page = "cart"
  //   this.selectedBookId = null
  // }
}