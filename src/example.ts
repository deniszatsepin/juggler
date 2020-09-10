import { compose } from './compose'
import { filter } from './filter'
import { map } from './map'
import { tap } from './tap'
import { flatMap } from './flat-map'
import { toPromise } from './to-promise'
import { of, as } from '.'
import { collect } from './collect'

const paperTypesInfo = [
  {
    id: 1,
    name: 'mt1',
    description: 'desc1',
    code: 'code1'
  },
  {
    id: 2,
    name: 'mt2',
    description: 'desc2',
    code: 'code2'
  },
  {
    id: 3,
    name: 'mt3',
    description: 'desc3',
    code: 'code3'
  }
]

export async function nmt() {
  const transformator = compose(
    filter(materialType => !!materialType),
    map(materialType => ({
      ...materialType,
      name: capitalize(materialType.name),
      description: capitalize(materialType.description)
    })),
    tap(materialType =>
      console.log('materialType.created', {
        materialTypeId: materialType.id,
        materialTypeCode: materialType.code
      })
    ),
    flatMap(materialType => as(saveToApi(materialType))),
    collect
  )

  const total = await toPromise(transformator(of(...paperTypesInfo)))

  console.log('Total: ', total)
}

function capitalize(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

async function saveToApi<T>(item: T) {
  return item
}

;(async () => {
  await nmt()
})()
