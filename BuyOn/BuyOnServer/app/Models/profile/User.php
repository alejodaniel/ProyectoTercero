<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'name', 'surname' ,'email','password','api_token',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       'password','api_token',
    ];

     /* function Profilepicture()
    {
       return $this->belongsTo('App\Profilepicture');
    }*/

    function Products()
    {
       return $this->hasMany('App\Product');
    }

    function Orders()
    {
       return $this->hasMany('App\Order');
    }

}