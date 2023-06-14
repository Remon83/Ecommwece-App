import React from 'react'

const Loading = ({children, loading, error}) => {
  return (
    <div>
        {loading ? 'Loading Please Wait...' : error ? 'Network Error' : children}
    </div>
    
  )
}

export default Loading