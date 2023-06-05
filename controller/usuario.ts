import { Request, Response } from 'express';


export const getUsuarios = (req: Request,res: Response) => {


    res.json({
        ok: true,
        msg: 'get-Usuarios'
    });

}


export const getUsuario = (req: Request,res: Response) => {

    const {id} = req.params;

    res.json({
        ok: true,
        msg: 'get-Usuario',
        id
    });

}


export const postUsuario = (req: Request,res: Response) => {

    const {body} = req;

    res.json({
        ok: true,
        msg: 'post-usuario',
        body
    });

}


export const putUsuario = (req: Request,res: Response) => {

    const {id} = req.params;

    const {body} = req;

    res.json({
        ok: true,
        msg: 'put-usuario',
        body,
        id
    });

}



export const deleteUsuario = (req: Request,res: Response) => {

    const {id} = req.params;


    res.json({
        ok: true,
        msg: 'delete-usuario',
    });

}
