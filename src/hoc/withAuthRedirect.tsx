import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

function withAuthRedirect(WrappedComponent: React.ComponentType) {
  const RedirectComponent: React.FC = () => {
    const activeUserId = useSelector(
      (state: RootState) => state.profile.activeUserId
    )
    const location = useLocation()
    return activeUserId ? (
      <WrappedComponent />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace={true} />
    )
  }

  return RedirectComponent
}

export default withAuthRedirect
