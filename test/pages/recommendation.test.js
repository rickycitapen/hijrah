/* eslint-env jest */
import VueMeta from 'vue-meta'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/recommendation.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const router = Helpers.initRouter(localVue)

const store = new Vuex.Store({
    state: {
        settingActiveTheme: Theme.DARK,
        page: ''
    },
    mutations: {
        [Types.SET_HEADER_TITLE](state, data) {
            state.headerTitle = data
        },
        [Types.SET_THEME](state, data) {
            state.settingActiveTheme = data
        },
        [Types.SET_PAGE](state, data) {
            state.page = data
        }
    },
    actions: {}
})

const createWrapper = () => {
    return shallowMount(Component, {
        sync: false,
        store,
        router,

        localVue
    })
}

describe('pages recommendation.vue', () => {
    test('success mounting components', () => {
        const wrapper = createWrapper()
        expect(wrapper).toBeTruthy()
    })

    test('computed for meta should fired', (done) => {
        const wrapper = createWrapper()
            // trigger change state with commit via mutations
        wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
        const title = 'Surat rekomendasi '
        expect(wrapper.vm.metaHead.title).toEqual(title)
        done()
    })
})