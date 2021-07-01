import { Router } from 'express';
//import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
//import { getAllOngs  } from './SalesOrders';
import { getAllSalesOrders  } from './SalesOrders';

// Ong-route
const salesOrdersRouter = Router();
//ongRouter.get('/all', getAllOngs);
salesOrdersRouter.get('/all', getAllSalesOrders);
// ongRouter.post('/add', addOneUser);
// ongRouter.put('/update', updateOneUser);
// ongRouter.delete('/delete/:id', deleteOneUser);

// User-route
// const userRouter = Router();
// userRouter.get('/all', getAllUsers);
// userRouter.post('/add', addOneUser);
// userRouter.put('/update', updateOneUser);
// userRouter.delete('/delete/:id', deleteOneUser);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/salesorders', salesOrdersRouter);
export default baseRouter;

// Export the base-router
// const baseRouter = Router();
// baseRouter.use('/users', userRouter);
// export default baseRouter;
