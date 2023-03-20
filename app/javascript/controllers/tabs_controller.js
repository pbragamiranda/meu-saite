import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["btn", "tab"]
  static values = { defaultTab: String }

  connect() {
    this.tabTargets.map(tag => tag.hidden = true)

    try {
      let selectedBtn = this.btnTargets.find(btn => btn.id === this.defaultTabValue)
      let selectedTab = this.tabTargets.find(tab => tab.id === this.defaultTabValue)
      selectedTab.hidden = false
      selectedBtn.classList.add("active")
    } catch { }
  }

  select(event) {
    let selectedTab = this.tabTargets.find(tab => tab.id === event.currentTarget.id)

    if (selectedTab.hidden) {
      this.tabTargets.map(tab => tab.hidden = true)
      this.btnTargets.map(btn => btn.classList.remove("active"))
      selectedTab.hidden = false
      event.currentTarget.classList.add("active")
    } else {
      this.tabTargets.map(tab => tab.hidden = true)
      this.btnTargets.map(btn => btn.classList.remove("active"))
      selectedTab.hidden = true
      event.currentTarget.classList.remove("active")
    }
  }
}
