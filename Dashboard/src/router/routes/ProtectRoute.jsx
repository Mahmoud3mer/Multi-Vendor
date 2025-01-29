/* eslint-disable react/prop-types */
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProtectRoute({ route, children }) {
    const { role, userInfo, loader } = useSelector(state => state.auth);
    if (loader) {
        return null
    }
    if (role) {
        if (route.role) {
            if (userInfo) {
                // eslint-disable-next-line react/prop-types
                if (userInfo.role === route.role) {
                    if (userInfo.role === 'seller') {
                        if (route.status) {
                            // eslint-disable-next-line react/prop-types
                            if (userInfo.status === route.status) {
                                return <Suspense fallback={null}>{children}</Suspense>
                            } else {
                                if (userInfo.status === 'pending') {
                                    return <Navigate to={'/seller/account-pending'} replace />
                                } else {
                                    return <Navigate to={'/seller/account-inactive'} replace />
                                }
                            }
                        }
                    } else {
                        return <Suspense fallback={null}>{children}</Suspense>
                    }
                    // return <Suspense fallback={null}>{children}</Suspense>
                } else {
                    if (route.visibility.some((r) => r === userInfo.status)) {
                        return <Suspense fallback={null}>{children}</Suspense>
                    } else {
                        return <Navigate to={'/seller/account-pending'} replace />
                    }
                }
            } else {
                return <Navigate to={'/unauthorized'} replace />
            }
        } else {
            if (route.ability === 'seller') {
                return <Suspense fallback={null}>{children}</Suspense>
            }
        }
    } else {
        return <Navigate to={'/login'} replace />
    }
}
