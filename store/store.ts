import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {charactersApi} from './rtkApi'


export const store = configureStore({
    
    reducer: {
        [charactersApi.reducerPath]: charactersApi.reducer,
    },


  // Добавляем middleware для использования дополнительных функций rtk-query, 
  //таких как кэширование, инвалидация и pooling.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
})


// Метод setupListeners, подключает слушатели событий фокуса (refetchOnFocus) 
//и повторного подключения (refetchOnReconnect ), чтобы автоматически 
//перезагружать данные при возвращении на страницу или восстановлении подключения
setupListeners(store.dispatch)
