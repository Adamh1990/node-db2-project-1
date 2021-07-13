const cars = [
    {
        vin: 'KNDJD733145261685',
        make: 'chevrolet',
        model: 'silverado',
        mileage: 125000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: '1112C4RC1BG3ER373707',
        make: 'pontiac',
        model: 'firebird',
        mileage: 225000,
        title: 'clean',
        transmission: 'manuel',
    },
    {
        vin: '5Y2SL65868Z423853',
        make: 'ford',
        model: 'focus',
        mileage: 125000,
        title: 'clean',
        transmission: 'automatic',
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}