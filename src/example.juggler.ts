import { filter } from './filter'
import { map, mapp } from './map'
import { toPromise } from './to-promise'
import { of, off } from './of'
import { collect } from './collect'
import { pipe } from './pipe'

const paperTypesInfo = [
  {
    id: 1,
    name: 'mt1',
    description: 'desc1',
    code: 'code1',
  },
  {
    id: 2,
    name: 'mt2',
    description: 'desc2',
    code: 'code2',
  },
  {
    id: 3,
    name: 'mt3',
    description: 'desc3',
    code: 'code3',
  },
  null,
]

export async function nmt() {
  const transformator = pipe(
    off(...paperTypesInfo),
    filter((materialType) => !!materialType),
    mapp((materialType) => ({
      ...materialType,
      name: capitalize(materialType.name),
      description: capitalize(materialType.description),
    })),
    collect
  )

  const total = await toPromise(transformator)

  // console.log('Total: ', total)
}

function capitalize(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

;(async () => {
  console.time('Juggler')

  for (let i = 0; i < 10000; i++) {
    await nmt()
  }

  console.timeEnd('Juggler')
})()
