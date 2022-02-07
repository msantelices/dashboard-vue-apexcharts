<template>
    <apexchart height="70" :options="options" :series="series"></apexchart>
</template>

<script>
export default {
    props: ['data'],
    setup(props) {
        const options = {
            // Tipo de grafico y barra de herramientas - Usamos stacked para crear barras de progreso
            chart: {
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false
                },
            },

            // Indicamos orientación horizontal y color de fondo para la sección que estará incompleta
            plotOptions: {
                bar: {
                    horizontal: true,
                    colors: {
                        backgroundBarColors: ['#40475d']
                    }
                }  
            },

            // Título del Gráfico - Obtenido por prop
            title: {
                text: props.data.name,
                floating: true,
                offsetX: 15,
                offsetY: 5,
                style: {
                    color: '#fff'
                }
            },

            // Usamos un subtitulo para mostrar el porcentaje de progreso en pantalla
            subtitle: {
                text: `${props.data.value}%`,
                align: 'right',
                floating: true,
                offsetY: 5,
                style: {
                    color: '#fff'
                }
            },

            // Etiquetas sobre las barras
            dataLabels: {
                enabled: false
            },

            // Estilos del tooltip
            tooltip: {
                theme: 'dark'
            },

            // Estilos del gráfico
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100]
                }
            },
            colors: ['#17ead9'],
            grid: {
                show: false,
            },

            // Eje X - Eliminamos estilos
            xaxis: {
                // Categorias obtenidas por prop (data)
                categories: [props.data.name],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },

            // Eje Y - Especificamos que el valor máximo será 100% y eliminamos estilos
            yaxis: {
                max: 100,
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false
                }
            }
        }

        // Data - Obtenida por Props
        const series = [{
            name: props.data.name,
            data: [props.data.value]
        }]


        return { options, series }
    }
}
</script>
