import { rest } from 'msw'
import { mockSearch } from '@/mock/api/mockSearch'

export const handlers = [rest.get('/api/search', mockSearch)]
