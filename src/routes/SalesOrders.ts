import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

//import OngDao from '@daos/User/SalesOrdersDao.mock';
import SalesOrdersDao from '@daos/User/SalesOrdersDao.mock';
import { paramMissingError } from '@shared/constants';

//const userDao = new UserDao();
//const ongDao = new OngDao();
const salesOrdersDao = new SalesOrdersDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
//export async function getAllUsers(req: Request, res: Response) {
//export async function getAllOngs(req: Request, res: Response) {
export async function getAllSalesOrders(req: Request, res: Response) {
    //const users = await ongDao.getAll();
    //const ongs = await salesOrdersDao.getAll();
    const salesOrders = await salesOrdersDao.getAll();
    //return res.status(OK).json({users});
    //return res.status(OK).json({ongs});
    return res.status(OK).json({salesOrders});
}


/**
 * Add one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
// export async function addOneUser(req: Request, res: Response) {
//     const { user } = req.body;
//     if (!user) {
//         return res.status(BAD_REQUEST).json({
//             error: paramMissingError,
//         });
//     }
//     await userDao.add(user);
//     return res.status(CREATED).end();
// }


// /**
//  * Update one user.
//  * 
//  * @param req 
//  * @param res 
//  * @returns 
//  */
// export async function updateOneUser(req: Request, res: Response) {
//     const { user } = req.body;
//     if (!user) {
//         return res.status(BAD_REQUEST).json({
//             error: paramMissingError,
//         });
//     }
//     user.id = Number(user.id);
//     await userDao.update(user);
//     return res.status(OK).end();
// }


// /**
//  * Delete one user.
//  * 
//  * @param req 
//  * @param res 
//  * @returns 
//  */
// export async function deleteOneUser(req: Request, res: Response) {
//     const { id } = req.params;
//     await userDao.delete(Number(id));
//     return res.status(OK).end();
// }
