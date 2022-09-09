export type ShowMode = 'all' | 'brows' | 'eyelashes'

export const showModes: { text: string; mode: ShowMode }[] = [
    {
        text: 'Все',
        mode: 'all',
    },
    {
        text: 'Брови',
        mode: 'brows',
    },
    {
        text: 'Ресницы',
        mode: 'eyelashes'
    }
]