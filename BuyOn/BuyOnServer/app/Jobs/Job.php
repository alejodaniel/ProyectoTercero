<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

abstract class Job implements ShouldQueue
{
    /*Esta clase de base de trabajo proporciona una ubicación central para colocar cualquier lógica que
| se comparte en todos sus trabajos. El rasgo incluido con la clase.
| proporciona acceso a los métodos de ayuda de cola "queueOn" y "delay
    use InteractsWithQueue, Queueable, SerializesModels;*/
}
