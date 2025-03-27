import connectDB from "../../../database/connectDB";
import Card from "../../../models/team";

export async function GET() {
    await connectDB(); // Ensure database is connected
    try {
        const data = await Card.find();
        //console.log("hello", data);
        return Response.json(data, { status: 200 });
    }
    catch (error) {
        console.error('Error fetching Cards:', error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}