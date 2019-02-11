<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('orders', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->date('date')->nullable($value = true);
          $table->string('price',255)->nullable($value = true);
          $table->string('quantity',255)->nullable($value = true);
          $table->unsignedInteger('idUser');
          $table->foreign('idUser')->references('id')->on('users')->onDelete('cascade');
          $table->unsignedInteger('idProduct');
          $table->foreign('idProduct')->references('id')->on('products')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('orders');
    }
}