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
    payment: Payment.none,
    mainPayment: ''
  },
  mutations: {

  },
  actions: {
    stepTo ({ state }, step: Step) {
      state.step = step
    },
    setPayment ({ state }, pm: Payment) {
      state.payment = pm
    },
    setMainPayment ({ state }, mp: string) {
      state.mainPayment = mp
    }
  }
})
