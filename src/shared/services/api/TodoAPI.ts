import axios from "axios";
import { parseISO } from "date-fns";
import { formatInTimeZone, fromZonedTime } from "date-fns-tz";


const axiosInstance = axios.create();

export interface ITodo {
    id: string;
    label: string;
    description: string;
    complete: boolean;
    completedAt?: string;
}

export interface ITodoWithoutId {
    label: string;
    description: string;
    complete: boolean;
    completedAt?: string;
}


const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const TodoAPI = {
    async getAll() {
        const response = await axiosInstance.get('/api/todos');
        const todos = response.data.todos as ITodo[];

        return todos.map(todo => ({
             ...todo,
            completedAt: todo.completedAt 
                ? formatInTimeZone(todo.completedAt, timeZone, "yyyy-MM-dd'T'HH:mm") 
                : undefined
        }));
    },
    async getById(id: string) {
        const response = await axiosInstance.get(`/api/todos/${id}`);

        const todo = response.data.todo as ITodo;

        return {
            ...todo,
            completedAt: todo.completedAt 
                ? formatInTimeZone(todo.completedAt, timeZone, "yyyy-MM-dd'T'HH:mm") 
                : undefined
        };        
    },
    async create(data: ITodoWithoutId) {
        if (data.completedAt) {
            const parsedDatetime = parseISO(data.completedAt);
            const utcDatetime = fromZonedTime(parsedDatetime, timeZone);
            data.completedAt = utcDatetime.toISOString();
        }

        const response = await axiosInstance.post('/api/todos', data);
        
        return response.data.todo as ITodo;
    },
    async updateById(id: string, data: Partial<ITodoWithoutId>) {
        if (data.completedAt) {
            const parsedDatetime = parseISO(data.completedAt);
            const utcDatetime = fromZonedTime(parsedDatetime, timeZone);
            data.completedAt = utcDatetime.toISOString();
        }
        
        await axiosInstance.put(`/api/todos/${id}`, data);

        return;
    },
    async deleteById(id: string) {
        await axiosInstance.delete(`/api/todos/${id}`);

        return;
    }
};