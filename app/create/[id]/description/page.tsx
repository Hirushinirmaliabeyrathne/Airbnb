import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader } from "@/components/ui/card"
import { Counter } from "@/app/Components/Counter"
import { CreationBottomBar } from "@/app/Components/CreationBottomBar"
import { CreateDescription } from "@/app/action"


export default function DescriptionPage({
    params,
}:{params: {id:string};
}) {
    return(
        <>
        <div className="w-3/5 mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                Pleace describe your home as good as you can
            </h2>
        </div>

        <form action={CreateDescription}>

            <input type="hidden" 
            name="homeId" 
            value={params.id}/>
            <div className="mx-auto w-3/5 mt-10 flex-col gap-y-5 mb-36">
                <div className="flex flex-col gap-y-2">
                <Label>Title</Label>
                 <Input 
                     name="title"
                     type="text"
                     required placeholder="Short and simple...."/>
                </div>
                <div>
                    <Label>Description</Label>
                    <Textarea 
                    name="description" 
                    required placeholder="Please describe your home..."/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Price</Label>
                    <Input name="price" 
                    type="number"
                    required placeholder="price per Night in USD"
                    min={10}/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Image</Label>
                    <Input name="image" type="file" required placeholder=""/>
                </div>
                <Card>
                    <CardHeader className="flex flex-col gap-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h3 className="underline font-medium">Guests</h3>
                                <p className="text-muted-foreground text-sm">How many guest do you want?</p>
                            </div>
                            <Counter name="guest"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h3 className="underline font-medium">Rooms</h3>
                                <p className="text-muted-foreground text-sm">How many rooms do you have?</p>
                            </div>
                            <Counter name="room"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h3 className="underline font-medium">BathRooms</h3>
                                <p className="text-muted-foreground text-sm">How many BathRooms do you want?</p>
                            </div>
                            <Counter name="bathroom"/>
                        </div>
                    </CardHeader>
                </Card>
            </div>
            <CreationBottomBar/>
        </form>
        </>
    )
}