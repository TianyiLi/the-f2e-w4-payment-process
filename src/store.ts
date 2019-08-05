import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum Payment {
  CreditCard = 1,
  Shop,
  WebATM,
  none,
  Finish
}

export enum Step {
  Select = 1,
  PaymentInput,
  Finish
}

export default new Vuex.Store({
  state: {
    step: Step.Select,
    category: Payment.none
  },
  mutations: {

  },
  actions: {
    stepTo ({ state }, step: Step, payment?: Payment) {
      state.step = step
      if (payment) {
        state.category = payment
      }
    }
  }
})
