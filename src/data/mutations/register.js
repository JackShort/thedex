import { GraphQLString, GraphQLNonNull } from 'graphql';
import UserType from '../types/UserType';
import User from '../models/User';

const register = {
  type: UserType,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'email of user',
    },
  },
  resolve: (_, args) => User.create(args),
};

export default register;
