import { Module } from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import { state } from './state'

export const media: Module<Object, any> = {
  namespaced: true,
  state,
  mutations,
  actions
}