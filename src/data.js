export default {
    loadAverage: {
        categories: ['14:30', '15:00', '15:30', '16:00', '16:30'],
        series: [
            {
                name: 'Carga promedio (%)',
                data: [30, 50, 40, 20, 60]
            }
        ]
    },
    processes: {
        categories: ['14:30', '15:00', '15:30', '16:00', '16:30'],
        series: [
            {
                data: [3, 4, 10, 2, 5],
                name: 'En espera'
            },
            {
                data: [8, 10, 15, 6, 4],
                name: 'En ejecución'
            }
        ]   
    },
    devices: {
        categories: ['Tipo 1', 'Tipo 2'],
        series: [60, 40]
    },
    processDetail: [
        {
            name: 'Proceso 1',
            value: 70
        },
        {
            name: 'Proceso 2',
            value: 40
        },
        {
            name: 'Proceso 3',
            value: 60
        }
    ]
}