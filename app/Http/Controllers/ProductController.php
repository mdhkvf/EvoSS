<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return $this->success($products, 200);
    }

    public function show($id)
    {
        $product = Product::find($id);
        if(!$product){
            return $this->error("The product with {$id} doesn't exist", 404);
        }

        return $this->success(collect([$product]), 200);
    }

    public function create(Request $request)
    {
        $this->validateRequest($request);

        $product = Product::create([
                    'Name' => $request->get('name'),
                    'ImageUrl'=> $request->get('imgUrl'),
                    'ShortDesc'=> $request->get('shortDesc'),
                    'CreatedAccountId' => $this->getUserId()
                ]);

        return $this->success("The product with with id {$product->id} has been created", 201);
    }

    public function update($id, Request $request)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return response()->json($product, 200);

        $product = Product::find($id);
        if(!$product){
            return $this->error("The product with {$id} doesn't exist", 404);
        }
        $this->validateRequest($request);
        $product->name              = $request->get('name');
        $product->imageUrl          = $request->get('imgUrl');
        $product->shortDesc         = $request->get('shortDesc');
        $product->CreatedAccountId  = $this->getUserId();
        $product->save();

        return $this->success("The product with with id {$product->id} has been updated", 200);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        if(!$product){
            return $this->error("The product with {$id} doesn't exist", 404);
        }
        // no need to delete the comments for the current post,
        // since we used on delete cascase on update cascase.
        // $product->comments()->delete();
        $product->delete();

        return $this->success("The product with with id {$id} has been deleted", 200);
    }
}