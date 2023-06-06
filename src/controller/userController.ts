import { Request, Response } from 'express';
import prisma from '../../prisma/prismaClient';

const UserController = {
  async createUser(req: Request, res: Response) {
    try {
      const user = await prisma.user.create({
        data: req.body,
      });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },

  async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  },

  async getUserByCpf(req: Request, res: Response) {
    const cpf = req.params.cpf;
    try {
      const user = await prisma.user.findUnique({
        where: { cpf },
      });
      if (!user) {
        res.status(404).json({ error: 'Usuário não encontrado' });
      } else {
        res.json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter usuário' });
    }
  },

  async updateUserByCpf(req: Request, res: Response) {
    const cpf = req.params.cpf;
    try {
      const user = await prisma.user.update({
        where: { cpf },
        data: req.body,
      });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  },

  async deleteUserByCpf(req: Request, res: Response) {
    const cpf = req.params.cpf;
    try {
      await prisma.user.delete({
        where: { cpf },
      });
      res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
  },
};

export default UserController;
