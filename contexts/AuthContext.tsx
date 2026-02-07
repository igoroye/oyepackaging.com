'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import type { Profile, AuthContextType } from '@/lib/auth-types'

const SESSION_CACHE_KEY = 'oye_auth_session'
const PROFILE_CACHE_KEY = 'oye_auth_profile'

function cacheSession(session: Session | null, profile: Profile | null) {
  try {
    if (session) {
      localStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(session))
      if (profile) {
        localStorage.setItem(PROFILE_CACHE_KEY, JSON.stringify(profile))
      }
    } else {
      localStorage.removeItem(SESSION_CACHE_KEY)
      localStorage.removeItem(PROFILE_CACHE_KEY)
    }
  } catch {
    // localStorage not available
  }
}

function getCachedSession(): { user: User; profile: Profile | null } | null {
  try {
    const cachedSession = localStorage.getItem(SESSION_CACHE_KEY)
    const cachedProfile = localStorage.getItem(PROFILE_CACHE_KEY)

    if (cachedSession) {
      const session: Session = JSON.parse(cachedSession)
      const profile = cachedProfile ? JSON.parse(cachedProfile) : null

      if (session.expires_at && session.expires_at * 1000 > Date.now()) {
        return { user: session.user, profile }
      }
    }
  } catch {
    // parse error
  }
  return null
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  session: null,
  loading: true,
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const cached = typeof window !== 'undefined' ? getCachedSession() : null
  const [user, setUser] = useState<User | null>(cached?.user ?? null)
  const [profile, setProfile] = useState<Profile | null>(cached?.profile ?? null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  const loadProfile = useCallback(async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle()

    if (!error && data) {
      setProfile(data)
      return data
    }
    return null
  }, [])

  useEffect(() => {
    const initSession = async () => {
      const { data: { session: currentSession } } = await supabase.auth.getSession()

      if (currentSession) {
        setSession(currentSession)
        setUser(currentSession.user)
        const prof = await loadProfile(currentSession.user.id)
        cacheSession(currentSession, prof)
      } else {
        setUser(null)
        setProfile(null)
        setSession(null)
        cacheSession(null, null)
      }
      setLoading(false)
    }

    initSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (event === 'SIGNED_OUT') {
        setUser(null)
        setProfile(null)
        setSession(null)
        cacheSession(null, null)
        setLoading(false)
        return
      }

      if (newSession) {
        setSession(newSession)
        setUser(newSession.user)

        ;(async () => {
          const prof = await loadProfile(newSession.user.id)
          cacheSession(newSession, prof)
          setLoading(false)
        })()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [loadProfile])

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }, [])

  const signUpWithEmail = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
  }, [])

  const handleSignOut = useCallback(async () => {
    cacheSession(null, null)
    setUser(null)
    setProfile(null)
    setSession(null)
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        session,
        loading,
        signInWithEmail,
        signUpWithEmail,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
