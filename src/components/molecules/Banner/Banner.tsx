import { useEffect } from 'react'

const Banner = () => {

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    console.log('test');
  }
  
  return (
    <div>Banner</div>
  )
}

export default Banner