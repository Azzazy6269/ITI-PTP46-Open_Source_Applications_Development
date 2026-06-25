import { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLFloat, 
    GraphQLList, 
    GraphQLID, 
    GraphQLError,
    GraphQLNonNull
} from "graphql";
import { User, Company } from "../database/model.js";

const companyType = new GraphQLObjectType({
    name: "company",
    fields: () => ({ // استخدمنا arrow function هنا لتجنب مشاكل الترتيب (Circular Dependency)
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        // العلاقة المطلوبة: جلب كل المستخدمين الذين يعملون في هذه الشركة
        users: {
            type: new GraphQLList(userType),
            resolve: async (parent) => {
                // parent هنا هو الـ company نفسها، فنبحث عن المستخدمين الذين يملكون الـ ID الخاص بها
                return await User.find({ company: parent.id });
            }
        }
    })
});

const userType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLFloat },
        company: {
            type: companyType,
            resolve: async (parent, args, context) => {
                const companyLoader = context.companyLoader;
                if (!parent.company) return null;
                return await companyLoader.load(parent.company);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "query_test",
    fields: {
        users: {
            type: new GraphQLList(userType),
            resolve: async () => await User.find()
        },
        user: {
            type: userType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: async (parent, args) => await User.findById(args.id)
        },
        companies: {
            type: new GraphQLList(companyType),
            resolve: async () => await Company.find()
        },
        company: {
            type: companyType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: async (parent, args) => await Company.findById(args.id)
        }
    }
});

const RootMutation = new GraphQLObjectType({
    name: "mutation_test",
    fields: {
        createCompany: {
            type: companyType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: GraphQLString }
            },
            resolve: async (parent, args) => await Company.create(args)
        },
        updateCompany: {
            type: companyType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                address: { type: GraphQLString }
            },
            resolve: async (parent, args) => {
                const updated = await Company.findByIdAndUpdate(args.id, args, { new: true });
                if (!updated) throw new GraphQLError("Company not found");
                return updated;
            }
        },
        deleteCompany: {
            type: companyType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: async (parent, args) => {
                const deleted = await Company.findByIdAndDelete(args.id);
                if (!deleted) throw new GraphQLError("Company not found");
                return deleted;
            }
        },


        createUser: {
            type: userType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLString },
                age: { type: GraphQLFloat },
                company: { type: GraphQLID }
            },
            resolve: async (parent, args) => {
                if (args.company) {
                    const company = await Company.findById(args.company);
                    if (!company) throw new GraphQLError("Company not found");
                }
                return await User.create(args);
            }
        },
        updateUser: {
            type: userType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                age: { type: GraphQLFloat },
                company: { type: GraphQLID }
            },
            resolve: async (parent, args) => {
                if (args.company) {
                    const company = await Company.findById(args.company);
                    if (!company) throw new GraphQLError("Company not found");
                }
                const updated = await User.findByIdAndUpdate(args.id, args, { new: true });
                if (!updated) throw new GraphQLError("User not found");
                return updated;
            }
        },
        deleteUser: {
            type: userType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: async (parent, args) => {
                const deleted = await User.findByIdAndDelete(args.id);
                if (!deleted) throw new GraphQLError("User not found");
                return deleted;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

export default schema;