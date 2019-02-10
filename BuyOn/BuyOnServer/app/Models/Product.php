<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'name','image','type',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];
    function User()
    {
       return $this->belongsTo('App\User');
    }

    function Order()
    {
       return $this->belongsTo('App\Order');
    }

    function Detail()
    {
       return $this->hasOne('App\Detail');
    }

}