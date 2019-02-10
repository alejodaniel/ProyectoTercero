<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\Product;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(Product::get(),200);
       } else {
          return response()->json(Product::findOrFail($id),200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(Product::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $product = new Product();
          $product->name  = $result['name'];
          $product->image = $result['image'];
          $product->type = $result['type'];
         /* $product->idDetail = $result['idDetail'];*/
          $product->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($product,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $product = Product::where('id',$result['id'])->update([
             'name '=>$result['name '],
             'image'=>$result['image'],
             'type'=>$result['type'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($product,200);
    }

    function delete(Request $data)
    {
       $result = $data->json()->all();
       $id = $result['id'];
       return Product::destroy($id);
    }
}