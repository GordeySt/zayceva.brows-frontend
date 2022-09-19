export type ShowMode = 'all' | 'brows' | 'eyelashes'

export const createShowModes = (t: any): { text: string; mode: ShowMode }[] => [
    {
        text: t('pages.servicesPage.categories.all'),
        mode: 'all',
    },
    {
        text: t('pages.servicesPage.categories.brows'),
        mode: 'brows',
    },
    {
        text: t('pages.servicesPage.categories.lashes'),
        mode: 'eyelashes'
    }
]