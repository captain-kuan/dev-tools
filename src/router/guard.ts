import { NavigationGuardWithThis } from "vue-router"

const guard: NavigationGuardWithThis<undefined> = (to, from, next) => {
 next()
}

export default guard
