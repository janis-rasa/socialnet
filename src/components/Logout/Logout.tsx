import React from 'react'
import { Button } from 'react-bootstrap'

const Logout = ({ logout }: { logout: () => void }) => {
  return (
    <div>
      <Button size="lg" onClick={logout}>
        Logout
      </Button>
    </div>
  )
}

export default Logout
