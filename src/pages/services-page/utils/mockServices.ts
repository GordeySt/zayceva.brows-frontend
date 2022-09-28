export const createService = (t: any) => ({
    brows: [
        {
            title: t('pages.servicesPage.servicesCard.browCorrection'),
            price: 17,
            description: t('pages.servicesPage.servicesCard.browCorrectionDesc'),
            availableTime: [
                new Date(2022, 9, 15, 12, 0),
                new Date(2022, 9, 15, 14, 0),
                new Date(2022, 9, 15, 16, 0),
                new Date(2022, 9, 15, 18, 0)
            ]
        },
        {
            title: t('pages.servicesPage.servicesCard.browTinting'),
            price: 25,
            description: t('pages.servicesPage.servicesCard.browTintingDesc'),
            availableTime: [
                new Date(2022, 9, 15, 12, 0),
                new Date(2022, 9, 15, 14, 0),
                new Date(2022, 9, 15, 16, 0),
                new Date(2022, 9, 15, 12, 0),
            ]
        },
        {
            title: t('pages.servicesPage.servicesCard.longTermStylingAndCorrection'),
            price: 27,
            description: t('pages.servicesPage.servicesCard.longTermStylingAndCorrectionDesc'),
            availableTime: [
                new Date(2022, 9, 15, 12, 0),
                new Date(2022, 9, 15, 14, 0),
                new Date(2022, 9, 15, 16, 0),
            ]
        },
        {
            title: t('pages.servicesPage.servicesCard.longTermStylingAndTinting'),
            price: 30,
            description: t('pages.servicesPage.servicesCard.longTermStylingAndTintingDesc'),
            availableTime: [
                new Date(2022, 9, 15, 12, 0),
                new Date(2022, 9, 15, 14, 0),
                new Date(2022, 9, 15, 16, 0),
            ]
        }
    ],
    eyelashes: [
        {
            title: 'Коррекция ресниц',
            price: 17,
            description: 'Коррекция проводится с ипользованием пинцета и воска.',
            availableTime: [
                new Date(2022, 9, 15, 12, 0),
                new Date(2022, 9, 15, 14, 0),
                new Date(2022, 9, 15, 16, 0),
                new Date(2022, 9, 15, 18, 0)
            ]
        },
        {
            title: 'Окрашивание бровей c коррекцией',
            price: 25,
            description: 'Окрашивание проводится с помощью специальной краски, после чего делается коррекция. ' +
                'Стоимость коррекции входит в стоимость окрашивания.',
            availableTime: [
                new Date(2022, 9, 15, 12, 0),
                new Date(2022, 9, 15, 14, 0),
                new Date(2022, 9, 15, 16, 0),
                new Date(2022, 9, 15, 12, 0),
            ]
        },
        {
            title: 'Долговременная укладка с коррекцией',
            price: 27,
            description: 'Окрашивание проводится с помощью специальной краски, после чего делается коррекция. ' +
                'Стоимость коррекции входит в стоимость окрашивания.',
            availableTime: [
                new Date(2022, 9, 15, 12, 0),
                new Date(2022, 9, 15, 14, 0),
                new Date(2022, 9, 15, 16, 0),
            ]
        },
        {
            title: 'Долговременная укладка с окрашиванием и коррекцией',
            price: 30,
            description: 'Окрашивание проводится с помощью специальной краски, после чего делается коррекция. ' +
                'Стоимость коррекции входит в стоимость окрашивания.',
            availableTime: [
                new Date(2022, 9, 15, 12, 0),
                new Date(2022, 9, 15, 14, 0),
                new Date(2022, 9, 15, 16, 0),
            ]
        }
    ]
});