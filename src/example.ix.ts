import { of, as, toArray } from 'ix/asynciterable'
import { filter, map, flatMap } from 'ix/asynciterable/operators'

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
  const transform = of(...paperTypesInfo).pipe(
    filter((materialType) => !!materialType),
    map((materialType) => ({
      ...materialType,
      name: capitalize(materialType.name),
      description: capitalize(materialType.description),
    }))
  )

  const total = await toArray(transform)

  // console.log('Total: ', total)
}

function capitalize(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

;(async () => {
  console.time('IX')

  for (let i = 0; i < 10000; i++) {
    await nmt()
  }

  console.timeEnd('IX')
})()
