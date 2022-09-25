import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
    const total = course.parts.reduce((total, next) => {
        // console.log('total:', total, 'next:', next.exercises)
        return total + next.exercises
    }, 0)
        
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={total} />
        </>
    )
}

export default Course