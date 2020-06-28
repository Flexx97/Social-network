export const required = value => {
    return value ? undefined : 'Required'
}

const maxLength = length => value => {
    if (value.length > length) {
              return  'Много символов'
    } return undefined
}
export const maxLength15 = maxLength(15)