import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..')

export const buildOutput = resolve(projRoot, 'dist')
export const pkgRoot = resolve(projRoot, 'src', 'packages')
export const themeRoot = resolve(projRoot, 'src', 'theme-chalk')

