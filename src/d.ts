/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />
import {Alpine as AlpineType} from 'alpinejs'

declare global {
  interface Window {
    Alpine: AlpineType
    Splide: any
  }
}

export {}